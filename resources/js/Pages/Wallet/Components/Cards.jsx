import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { DeleteButton } from './DeleteButton'
import { ChangeButton } from './ChangeButton'

export function Cards(props){
    let flag
    if( props.card.method_id == 'visa' ){
        flag = faCcVisa
    }else{
        flag = faCcMastercard
    }

    return(
        <div className="wallet" key={props.card.id}>
            <div className="dashboard-block dashboard-wallet">
                <div className="wallet-flag">
                    <FontAwesomeIcon icon={flag} size="3x" />
                </div>
                <div className="wallet-info">
                    <h1>**** **** **** {props.card.last_four_digits}</h1>
                    <div className="wallet-info-date">
                        <div>
                            <span>Nome completo</span>
                            <h2>{props.card.card_name}</h2>
                        </div>
                        <div>
                            <span>Validade</span>
                            <h2>{props.card.expiration_date}</h2>
                        </div>
                    </div>
                </div>
                <div className="wallet-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad"><stop stopColor="#432eef7a" stopOpacity="1" offset="45%"></stop><stop stopColor="#402aef1e" stopOpacity="1" offset="100%"></stop></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-2"><stop stopColor="#402aef1e" stopOpacity="1" offset="0%"></stop><stop stopColor="#432eef7a" stopOpacity="1" offset="45%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-3"><stop stopColor="#432eef7a" stopOpacity="1" offset="45%"></stop><stop stopColor="#402aef1e" stopOpacity="1" offset="100%"></stop></linearGradient><linearGradient gradientTransform="rotate(270)" x1="50%" y1="0%" x2="50%" y2="100%" id="rrreflection-grad-4"><stop stopColor="#402aef1e" stopOpacity="1" offset="0%"></stop><stop stopColor="#432eef7a" stopOpacity="1" offset="45%"></stop></linearGradient></defs><g strokeWidth="2" stroke="url(#rrreflection-grad)" fill="none"><circle r="375" cx="50%" cy="0"></circle><circle r="362.5" cx="50%" cy="0"></circle><circle r="350" cx="50%" cy="0"></circle><circle r="337.5" cx="50%" cy="0"></circle><circle r="325" cx="50%" cy="0"></circle><circle r="312.5" cx="50%" cy="0"></circle><circle r="300" cx="50%" cy="0"></circle><circle r="287.5" cx="50%" cy="0"></circle><circle r="275" cx="50%" cy="0"></circle><circle r="262.5" cx="50%" cy="0"></circle><circle r="250" cx="50%" cy="0"></circle><circle r="237.5" cx="50%" cy="0"></circle><circle r="225" cx="50%" cy="0"></circle><circle r="212.5" cx="50%" cy="0"></circle><circle r="200" cx="50%" cy="0"></circle><circle r="187.5" cx="50%" cy="0"></circle><circle r="175" cx="50%" cy="0"></circle><circle r="162.5" cx="50%" cy="0"></circle><circle r="150" cx="50%" cy="0"></circle><circle r="137.5" cx="50%" cy="0"></circle><circle r="125" cx="50%" cy="0"></circle><circle r="112.5" cx="50%" cy="0"></circle><circle r="100" cx="50%" cy="0"></circle><circle r="87.5" cx="50%" cy="0"></circle><circle r="75" cx="50%" cy="0"></circle><circle r="62.5" cx="50%" cy="0"></circle><circle r="50" cx="50%" cy="0"></circle><circle r="37.5" cx="50%" cy="0"></circle><circle r="25" cx="50%" cy="0"></circle><circle r="12.5" cx="50%" cy="0"></circle></g><g strokeWidth="2" stroke="url(#rrreflection-grad-2)" fill="none"><circle r="375" cx="50%" cy="100%"></circle><circle r="362.5" cx="50%" cy="100%"></circle><circle r="350" cx="50%" cy="100%"></circle><circle r="337.5" cx="50%" cy="100%"></circle><circle r="325" cx="50%" cy="100%"></circle><circle r="312.5" cx="50%" cy="100%"></circle><circle r="300" cx="50%" cy="100%"></circle><circle r="287.5" cx="50%" cy="100%"></circle><circle r="275" cx="50%" cy="100%"></circle><circle r="262.5" cx="50%" cy="100%"></circle><circle r="250" cx="50%" cy="100%"></circle><circle r="237.5" cx="50%" cy="100%"></circle><circle r="225" cx="50%" cy="100%"></circle><circle r="212.5" cx="50%" cy="100%"></circle><circle r="200" cx="50%" cy="100%"></circle><circle r="187.5" cx="50%" cy="100%"></circle><circle r="175" cx="50%" cy="100%"></circle><circle r="162.5" cx="50%" cy="100%"></circle><circle r="150" cx="50%" cy="100%"></circle><circle r="137.5" cx="50%" cy="100%"></circle><circle r="125" cx="50%" cy="100%"></circle><circle r="112.5" cx="50%" cy="100%"></circle><circle r="100" cx="50%" cy="100%"></circle><circle r="87.5" cx="50%" cy="100%"></circle><circle r="75" cx="50%" cy="100%"></circle><circle r="62.5" cx="50%" cy="100%"></circle><circle r="50" cx="50%" cy="100%"></circle><circle r="37.5" cx="50%" cy="100%"></circle><circle r="25" cx="50%" cy="100%"></circle><circle r="12.5" cx="50%" cy="100%"></circle></g><g strokeWidth="2" stroke="url(#rrreflection-grad-3)" fill="none"><circle r="375" cx="0" cy="50%"></circle><circle r="362.5" cx="0" cy="50%"></circle><circle r="350" cx="0" cy="50%"></circle><circle r="337.5" cx="0" cy="50%"></circle><circle r="325" cx="0" cy="50%"></circle><circle r="312.5" cx="0" cy="50%"></circle><circle r="300" cx="0" cy="50%"></circle><circle r="287.5" cx="0" cy="50%"></circle><circle r="275" cx="0" cy="50%"></circle><circle r="262.5" cx="0" cy="50%"></circle><circle r="250" cx="0" cy="50%"></circle><circle r="237.5" cx="0" cy="50%"></circle><circle r="225" cx="0" cy="50%"></circle><circle r="212.5" cx="0" cy="50%"></circle><circle r="200" cx="0" cy="50%"></circle><circle r="187.5" cx="0" cy="50%"></circle><circle r="175" cx="0" cy="50%"></circle><circle r="162.5" cx="0" cy="50%"></circle><circle r="150" cx="0" cy="50%"></circle><circle r="137.5" cx="0" cy="50%"></circle><circle r="125" cx="0" cy="50%"></circle><circle r="112.5" cx="0" cy="50%"></circle><circle r="100" cx="0" cy="50%"></circle><circle r="87.5" cx="0" cy="50%"></circle><circle r="75" cx="0" cy="50%"></circle><circle r="62.5" cx="0" cy="50%"></circle><circle r="50" cx="0" cy="50%"></circle><circle r="37.5" cx="0" cy="50%"></circle><circle r="25" cx="0" cy="50%"></circle><circle r="12.5" cx="0" cy="50%"></circle></g><g strokeWidth="2" stroke="url(#rrreflection-grad-4)" fill="none"><circle r="375" cx="100%" cy="50%"></circle><circle r="362.5" cx="100%" cy="50%"></circle><circle r="350" cx="100%" cy="50%"></circle><circle r="337.5" cx="100%" cy="50%"></circle><circle r="325" cx="100%" cy="50%"></circle><circle r="312.5" cx="100%" cy="50%"></circle><circle r="300" cx="100%" cy="50%"></circle><circle r="287.5" cx="100%" cy="50%"></circle><circle r="275" cx="100%" cy="50%"></circle><circle r="262.5" cx="100%" cy="50%"></circle><circle r="250" cx="100%" cy="50%"></circle><circle r="237.5" cx="100%" cy="50%"></circle><circle r="225" cx="100%" cy="50%"></circle><circle r="212.5" cx="100%" cy="50%"></circle><circle r="200" cx="100%" cy="50%"></circle><circle r="187.5" cx="100%" cy="50%"></circle><circle r="175" cx="100%" cy="50%"></circle><circle r="162.5" cx="100%" cy="50%"></circle><circle r="150" cx="100%" cy="50%"></circle><circle r="137.5" cx="100%" cy="50%"></circle><circle r="125" cx="100%" cy="50%"></circle><circle r="112.5" cx="100%" cy="50%"></circle><circle r="100" cx="100%" cy="50%"></circle><circle r="87.5" cx="100%" cy="50%"></circle><circle r="75" cx="100%" cy="50%"></circle><circle r="62.5" cx="100%" cy="50%"></circle><circle r="50" cx="100%" cy="50%"></circle><circle r="37.5" cx="100%" cy="50%"></circle><circle r="25" cx="100%" cy="50%"></circle><circle r="12.5" cx="100%" cy="50%"></circle></g></svg>
                </div>
            </div>
            <div>
                <DeleteButton card={props.card.id} />
                {props.unique ? null :
                    <ChangeButton card={props.card} />
                }
            </div>
        </div>
    )
}