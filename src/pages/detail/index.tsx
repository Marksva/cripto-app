import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { type CoinProps } from "../home";
import styles from "./detail.module.css"

interface ResponseData {
    data: CoinProps;
}

interface ErrorData {
    error: string;
}

type DataProps = ResponseData | ErrorData;

export function Detail() {
    const navigate = useNavigate();
    const { cripto } = useParams();
    const [coin, setCoin] = useState<CoinProps>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCoin() {
            try {
                fetch(`https://rest.coincap.io/v3/assets/${cripto}?apiKey=${import.meta.env.VITE_SECRET_KEY}`)
                    .then(response => response.json())
                    .then((data: DataProps) => {

                        if ('error' in data) {
                            navigate('/');
                            return;
                        }

                        const price = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })

                        const priceCompact = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            notation: 'compact',
                        })

                        const resultData = {
                            ...data.data,
                            formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                            formatedPrice: price.format(Number(data.data.priceUsd)),
                            formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
                        }

                        setCoin(resultData);
                        setLoading(false);
                    })

            } catch (error) {
                console.log(error)
                navigate('/')
            }
        }

        getCoin();

    }, [cripto])


    if (loading || !coin) {
        return (
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando detalhes...</h4>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.center}>{coin?.name}</h1>
            <h1 className={styles.center}>{coin?.symbol}</h1>
            <section className={styles.content}>
                <img
                    src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
                    alt="Logo Cripto"
                    className={styles.logo} />
                <h1>{coin?.name} | {coin?.symbol}</h1>
                <p><strong>Preço: </strong>{coin?.formatedPrice}</p>

                <a href="">
                    <strong>Mercado: </strong>{coin?.formatedMarket}
                </a>

                <a href="">
                    <strong>Volume: </strong>{coin?.formatedVolume}
                </a>

                <a href="">
                    <strong>Mudança 24h: </strong><span className={Number(coin?.changePercent24Hr) > 0 ? styles.Profit : styles.Loss}>{Number(coin?.changePercent24Hr).toFixed(3)}</span>
                </a>



            </section>
        </div>
    )
}