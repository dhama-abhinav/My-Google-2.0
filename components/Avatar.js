
export const Avatar = (props) => {
  return (
    <img className={`rounded-full h-10 w-10 object-cover transition duration-150 transform hover:scale-110 ${props.className}`}
    loading='lazy'
    src={props.url}
    alt='profile'
    />
  )
}
