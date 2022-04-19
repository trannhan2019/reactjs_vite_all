import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LockClosedIcon } from '@heroicons/react/solid';
import InputText from '../../../components/form-controls/InputText';
import AuthLayout from '../../../layouts/auth/AuthLayout';

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your full name.'),
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 characters.'),
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('teasdfasdf');
  };

  return (
    <AuthLayout>
      <form
        className="mt-8 space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="rounded-md shadow-sm -space-y-px">
          <InputText
            name="name"
            type="text"
            placeholder="Enter your Fullname"
            form={form}
          />

          <InputText
            name="enail"
            type="email"
            placeholder="Enter your Email"
            form={form}
          />

          <InputText
            name="password"
            type="password"
            placeholder="Enter your Password"
            form={form}
          />
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
