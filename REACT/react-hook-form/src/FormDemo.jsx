import { useForm } from 'react-hook-form';
export default function FormDemo() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const handleRegistration = (formData) => {
        console.log("FORM SUBMITTED");
        console.log(formData);
    }
    const handleError = (errors) => { };

    const registerOptions = {
        name: { required: "Name cannot be blank" },
        email: { required: "Email cannot be blank" },
        password: {
            required: "Password is required",
            minLength: {
                value: 10,
                message: "Password must be at least 10 chracters"
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" {...register("name", registerOptions.name)} />
                <small className="text-danger">{errors?.name && errors.name.message}</small>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="name" {...register("email", registerOptions.email)} />
                <small className="text-danger">{errors?.email && errors.email.message}</small>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" {...register("password", registerOptions.password)} />
                <small className="text-danger">{errors?.password && errors.password.message}</small>
            </div>
            <button>Submit</button>
        </form>
    )

}
