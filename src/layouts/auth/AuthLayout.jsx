import { LockClosedIcon } from '@heroicons/react/solid';
const AuthLayout = (props) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default AuthLayout;
