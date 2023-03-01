import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import swal from 'sweetalert'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const LANGUAGETEXT = {
    english: {
        connect: "Connect Wallet",
        warnText: [
            'Error', 'Need to install an injected Web3 Wallet'
        ]
    },
    chinese: {
        connect: "连接钱包",
        warnText: [
            '错误', '请安装一个Web3钱包'
        ]
    },
    traditionalchinese: {
        connect: "連接錢包",
        warnText: [
            '錯誤', '請安裝一個Web3錢包'
        ]
    }
};


const WalletConnect = ({ defaultAccountChange }) => {
    const {
        language
    } = useContext(ThemeContext);

    const [defaultAccount, setDefaultAccount] = useState(null)
    const [correctNetwork, setCorrectNetwork] = useState(null);
    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet")
    const [warnText, setWarnText] = useState(['Error', 'Need to install an injected Web3 Wallet'])

    const setLanguage = () => {
        if (defaultAccount !== null) return;
        const text = LANGUAGETEXT[language.value].connect
        setConnectButtonText(text)
        setWarnText(LANGUAGETEXT[language.value].warnText)
    }

    useEffect(() => {
        setLanguage()

    }, [language.value])

    useEffect(() => {
        changingAccount();
        defaultAccountChange(defaultAccount);
    }, [defaultAccount])

    async function changingAccount() {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connectWalletHandler()
            })
        }
    }

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(async (result) => {
                    await accountChangeHandler(result[0]);
                    setConnectButtonText(`${result[0].slice(0, 4)}...${result[0].slice(-4)}`);
                })
        } else {
            swal(`${warnText[0]}`, `${warnText[1]}`, 'error')
        }
    }

    const accountChangeHandler = async (newAccount) => {
        setDefaultAccount(newAccount);
    }

    return (
        <div className="btnConnect">
            <button
                onClick={connectWalletHandler}
                className="btn btn-primary rounded-pill"
                style={{
                    maxWidth: '120px',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px'
                }}
            >{connectButtonText}</button>
        </div>
    )
}

export default WalletConnect
