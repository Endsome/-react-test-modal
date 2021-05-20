import '../styles/input.scss';

const Input = (props) => {
    const input = <input type="text" className='input' placeholder={props.children} />
    const textarea = <textarea className='textarea' placeholder={props.children}></textarea>
    return (
        props.type === 'textarea' ? textarea : input
    );
}

export default Input;
