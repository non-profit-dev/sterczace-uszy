const firstNameRegex = /^[A-Za-z]+$/i
const lastNameRegex = !/^[A-Za-z]{2,}(-[A-Za-z]{2,})?$/i
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i

export { firstNameRegex, lastNameRegex, emailRegex }
