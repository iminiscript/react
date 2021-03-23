
function ContactCard(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.imgUrl} />
            <h1 className="contact-name">{props.name}</h1>
            <p className="contact-phone">{props.phone}</p>
        </div>
    )
}

export default ContactCard;