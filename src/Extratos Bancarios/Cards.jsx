function Cards({ title1, subtitle, value }) {
    return (
        <div className="flex items-center justify-between bg-[#C1C1C1] w-[347px] p-3 text-xs border-2 mb-3 ml-3 rounded-2xl">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-[14px]">{title1}</h2>
                <p className="text-[#ef3e3e] text-[16px] uppercase">{subtitle}</p>
            </div>

            <div>
                <h4 className="text-[#ef3e3e] text-[16px] font-bold">{value}</h4>
            </div>
        </div>
    )
}
export default Cards;