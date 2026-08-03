import { MonthSelector } from "@/components/MonthSelector/MonthSelector";
import { TransactionTable } from "@/components/Transactions/TransactionTable";
import { ChevronDown, ChevronUp} from "lucide-react";
import { useState } from "react";

export function TransactionsView({transactions, year, month, onMonthChange, onYearChange, mobile = false }) {

  const [open, setOpen] = useState(true);
  return (
    <div
      className={
        mobile
        ? "flex flex-col"
        : "flex flex-col h-full min-h-0"
      }
    >
        { !mobile && (<div className="flex justify-between items-center p-3 shrink-0">
          <p>Movimientos</p>
          <MonthSelector
            year={year}
            month={month}
            onMonthChange={onMonthChange}
            onYearChange={onYearChange}
          />
        </div> )}

        { mobile && (
          <div 
            className="sticky top-0 z-10 backdrop-blur-md bg-[#F6F8F6] shrink-0 flex p-1.5 pb-2 items-center text-sm gap-1"
            onClick={() => setOpen(!open)}>
            <p>Movimientos</p> 
            {
              open ? (<ChevronUp className="mt-0.5" size="16"/>)
              : (<ChevronDown className="mt-0.5" size="16"/>)
            }
          </div>
        )}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } lg:flex-1 lg:min-h-0`}
        >
          <div className="overflow-hidden">
            <TransactionTable
              className="lg:mx-3 lg:h-full"
              transactions={transactions}
            />
          </div>
        </div>
      </div>
  );
}