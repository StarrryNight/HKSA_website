import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SPONSOR_EMAIL, SPONSOR_GMAIL_URL, SPONSOR_MAILTO_URL } from "../links";

export function SponsorButton({ className, children }: { className: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SPONSOR_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is selectable on screen instead.
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {children}
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0A0A0A] border border-white/10 max-w-[calc(100%-2rem)] sm:max-w-md [&>button]:text-white">
          <div className="border-l-4 border-[#CC0000] pl-4">
            <DialogTitle className="text-xl text-white tracking-widest">BECOME A SPONSOR</DialogTitle>
            <DialogDescription className="text-sm text-white/60 mt-2 font-light">
              Email our PR team and we'll get back to you with sponsorship details.
            </DialogDescription>
          </div>

          <div className="mt-2 flex items-center gap-2 border border-white/20 px-3 py-3">
            <span className="flex-1 text-white text-sm sm:text-base select-all break-all">
              {SPONSOR_EMAIL}
            </span>
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#CC0000] text-[#CC0000] text-xs tracking-widest font-bold hover:bg-[#CC0000] hover:text-white transition-colors duration-300"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SPONSOR_GMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-3 border-2 border-[#CC0000] bg-[#CC0000] text-white text-sm tracking-widest font-bold hover:bg-transparent hover:text-[#CC0000] transition-all duration-300"
            >
              OPEN IN GMAIL
            </a>
            <a
              href={SPONSOR_MAILTO_URL}
              className="flex-1 text-center px-4 py-3 border-2 border-white/30 text-white text-sm tracking-widest font-bold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              USE MAIL APP
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
