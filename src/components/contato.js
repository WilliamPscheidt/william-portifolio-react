import emailIcon from './svg/email-icon.svg'

const contato = () => {
    return (
        <section className="contato" id="contato">
            <h3 className="title">Contato</h3>
            <div className="social-media">
                <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-icon" />
                <span id="separator">·</span>
                <a href="https://www.linkedin.com/in/william-pscheidt-9193341a4/" className='texto-contato'>Acesse o meu perfil</a>
            </div>
            <div className="social-media">
                <img className="icon" src={emailIcon} alt="linkedin-icon" />
                <span id="separator">·</span>
                <span className='texto-contato'>contato@williampscheidt.com.br</span>
            </div>
        </section>
    )
}

export default contato