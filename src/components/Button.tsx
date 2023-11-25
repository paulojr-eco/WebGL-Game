import Link from 'next/link';

interface ButtonProps {
  name: String;
  link: String;
}

const Button = (props: ButtonProps) => {
  return (
    <Link href={`${props.link}`}>
      <button className='w-48 h-16 bg-gradient-to-b from-green to-blue rounded-2xl font-bold text-2xl'>
        {props.name}
      </button>
    </Link>
  );
};

export default Button;
