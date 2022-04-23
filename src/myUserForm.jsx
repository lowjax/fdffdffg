const formClassName = ""
const inputClassName = ""
const errorClassName = ""

export const myUserForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} =useForm()

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <form>
        <label>first name:</label>
            <input className={inputClassName} onSubmit={handleSubmit(onSubmit)}/>
            <span className={errorClassName}></span>
        <label>last name:</label>
            <input className={inputClassName} {...register("firstname", {required: true, maxLength: 20, pattern: /^[a-zA-Z]*$/})} />
            <span className={errorClassName}>{errors.firstname && "invalid first name"}</span>
        <label>email:</label>
        <label>First Name: </label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Last Name: </label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Email: </label>
        <input type="email" className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Username: </label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Password: </label>
        <input type="password" className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Confirm Password: </label>
        <input type="password" className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Role: </label>
        <select>
            <option value="user">User</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
        </select>
        <span></span>
        <input type="submit" />
        <span>|</span>
            
    </form>
}