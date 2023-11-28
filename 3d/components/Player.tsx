import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { useInput } from '../hooks/useInput';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { directionOffset } from '../utils/directions/directionOffset';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const Player = (props: any) => {
  const modelRef = useRef();
  const model = useGLTF('./models/Mario.gltf');
  const { actions } = useAnimations(model.animations, modelRef);
  let isJumping = false;
  let jumpHeight = 50;
  let jumpSpeed = 2;
  let gravity = 0.1;
  let currentJump = 0;

  const dirLight = useRef<THREE.DirectionalLight>(null);

  const { forward, backward, left, right, jump, shift } = useInput();

  const currentAction = useRef('');
  const controlsRef = useRef<any>();
  const camera = useThree((state) => state.camera);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;

    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;
    if (controlsRef.current) {
      controlsRef.current.target = cameraTarget;
    }
  };

  useEffect(() => {
    let action = 'idle';

    if (forward || backward || left || right) {
      action = 'walking';
      if (shift) {
        action = 'running';
      }
      if (jump) {
        action = 'jumping';
      }
    } else if (jump) {
      action = 'jumping';
    } else {
      action = 'idle';
    }

    if (currentAction.current != action) {
      const nextAction = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextAction?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift]);

  useFrame((state, delta) => {
    if (
      currentAction.current === 'running' ||
      currentAction.current === 'walking' ||
      (currentAction.current === 'jumping' &&
        (forward || backward || left || right)) ||
      (currentAction.current === 'walking' &&
        (forward || backward || left || right))
    ) {
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      rotateQuaternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      model.scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      const velocity = currentAction.current == 'running' ? 100 : 50;

      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      model.scene.position.x += moveX;
      model.scene.position.z += moveZ;
      updateCameraTarget(moveX, moveZ);
    }
  });

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  return (
    <>
      <OrbitControls ref={controlsRef} />
      <directionalLight
        position={[
          model.scene.position.x - 200,
          model.scene.position.y + 20,
          model.scene.position.z + 50,
        ]}
        castShadow
        target={model.scene}
        ref={dirLight}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color={'#be9bff'}
      />

      <mesh>
        <primitive object={model.scene} ref={modelRef} />
      </mesh>
      <CuboidCollider
        position={[
          model.scene.position.x,
          model.scene.position.y,
          model.scene.position.z,
        ]}
        args={[15, 40, 15]}
        name='player_collider'
      />
    </>
  );
};

useGLTF.preload('./models/Mario.gltf');

export default Player;
