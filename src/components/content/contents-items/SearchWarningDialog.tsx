import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle } from "../../ui/dialog";


interface SearchWarningDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function SearchWarningDialog({ isOpen, handleClose }: SearchWarningDialogProps) {

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-sm">
        <DialogTitle>title</DialogTitle>
        <div className="text-sm text-gray-600">검색어는 최소 2자 이상 입력해야 합니다.</div>
        <DialogFooter>
          <DialogClose onClick={handleClose}>확인</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
