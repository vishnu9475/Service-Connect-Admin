import TransactionItem from "./TransactionItem";

export default function TransactionLists() {
  // Dummy transactions
  const transactions = [
    {
      id: 1,
      title: "Build Personal Branding",
      category: "Web Designer",
      status: "Paid",
    },
    {
      id: 2,
      title: "Logo Design",
      category: "Graphic Designer",
      status: "Paid",
    },
    {
      id: 3,
      title: "Website Development",
      category: "Frontend Developer",
      status: "Paid",
    },
    {
      id: 4,
      title: "SEO Optimization",
      category: "Digital Marketer",
      status: "Paid",
    },
    
  ];

  return (
    <div className="w-[100%] h-fit bg-gray-300 mb-5 md;mb-2">
        <div className="pb-4">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
    </div>
  );
}
