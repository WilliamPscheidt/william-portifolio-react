import emailIcon from './svg/email-icon.svg'

const contato = () => {
    return (
        <section class="contato" id="contato">
            <h3 class="title">Contato</h3>
            <div class="social-media">
                <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin-icon" />
                <span id="separator">·</span>
                <a href="https://www.linkedin.com/in/william-pscheidt-9193341a4/">Acesse o meu perfil</a>
            </div>
            <div class="social-media">
                <img class="icon" src={emailIcon} alt="linkedin-icon" />
                <span id="separator">·</span>
                <span>contato@williampscheidt.com.br</span>
            </div>
        </section>
    )
}

export default contato