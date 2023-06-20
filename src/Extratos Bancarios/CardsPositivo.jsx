function CardsPositivo({title2, subtitle2, value2}) {
    return (
        <div className="flex items-center justify-between bg-[#C1C1C1] w-[347px] p-3 text-xs border-2 mb-3 ml-3 rounded-2xl">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-[14px]">{title2}</h2>
                <p className="text-[#08B70F] text-[16px] uppercase">{subtitle2}</p>
            </div>

            <div>
                <h4 className="text-[#08B70F] text-[16px] font-bold">{value2}</h4>
            </div>


        </div>
    )
}

export default CardsPositivo;