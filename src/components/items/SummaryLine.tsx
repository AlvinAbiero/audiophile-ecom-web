type SummaryLineProps = {
  name: string;
  amount: number;
  [props: string]: unknown;
  grandTotal?: boolean;
};

const SummaryLine: React.FC<SummaryLineProps> = ({
  name,
  amount,
  grandTotal = false,
  ...other
}) => {
  return (
    <div className="flex justify-between items-center" {...other}>
      <dt className="uppercase">{name}</dt>
      <dd
        className={`uppercase font-bold text-lg ${
          grandTotal ? "text-orange-500" : "text-black"
        }`}
      >
        $ {amount.toLocaleString("en-US")}
      </dd>
    </div>
  );
};

export default SummaryLine;
