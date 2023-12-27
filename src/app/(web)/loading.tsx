import { Spinner } from '@nextui-org/react';

type Props = {};

export default function LoadingPage({}: Props) {
  return (
    <div className="screens min-h-screen h-full flex items-center justify-center">
      <Spinner color="success" size="lg" />
    </div>
  );
}
