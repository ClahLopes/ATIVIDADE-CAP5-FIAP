import Month from "../Area Investimento/Month";
import Menu from "../Area Investimento/menu";
import { ButtonEscuro } from "../Login/ButtonEscuro";
import Cards from "./Cards";
import CardsPositivo from "./CardsPositivo";

function Extrato() {
    return (
        <div>

            <Menu props="Extratos Bancarios" />
            <Month title1="Janeiro" title2="Fevereiro" title3="Março" title4="Abril" title5="Maio" />

            <div className="mt-5">
                <h1 className="font-bold text-[12px] ml-5 m">5 de Abril</h1>
                <Cards title1="Cartao de crédito" subtitle="Casas Bahia" value="R$ 340,00" />
                <Cards title1="Cartao de crédito" subtitle="Itau visa" value="R$ 219,90" />
            </div>

            <div className="mt-5">
                <h1 className="font-bold text-[12px] ml-5 m">5 de Abril</h1>
                <CardsPositivo title2="Cartao de crédito" subtitle2="Pix Transf Aline" value2="R$ 219,90" />
                <CardsPositivo title2="Cartao de crédito" subtitle2="Investimento CDB" value2="R$ 1020,90" />
            </div>

            <div className="mt-5">
                <h1 className="font-bold text-[12px] ml-5 m">5 de Abril</h1>
                <Cards title1="Cartao de crédito" subtitle="Amazon Prime" value="R$ 29,90" />
            </div>

            <div className="ml-24 mt-5">
                <ButtonEscuro props="Gerar PDF" />
            </div>
        </div>
    )
}
export default Extrato;