export default function ServiceCard({ children }) {
    return (
        <div className="border-[#53F995] rounded-[10px] border-2 w-[353px] h-[163px] flex shadow-service items-center justify-center">
            <h3 className="text-dark-gray text-[28px] font-medium max-w-[300px] text-center">{children}</h3>
        </div>
    )
}