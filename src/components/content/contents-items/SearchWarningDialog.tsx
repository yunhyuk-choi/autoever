import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from "../../ui/dialog";


interface SearchWarningDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function SearchWarningDialog({ isOpen, handleClose }: SearchWarningDialogProps) {

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-sm  rounded-none [button[data-state='close']]:hidden">
        <DialogTitle className="hidden">title</DialogTitle>
        <div className="text-sm text-gray-600">검색어는 2글자 이상 입력해주세요.</div>
        <DialogFooter>
          <DialogClose className="hover:cursor-pointer mr-auto ml-auto border border-black p-[8px_16px]" onClick={handleClose}>확인</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
