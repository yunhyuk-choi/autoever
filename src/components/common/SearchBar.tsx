"use client";

import { ChangeEvent, Fragment, KeyboardEvent, useCallback, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { useCategory } from "@/store/store";
import SearchWarningDialog from "./SearchWarningDialog";

export default function SearchBar() {
  const { tab, setQuestion } = useCategory();
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setInput("");
  }, []);

  const handleSearch = useCallback(() => {
    if (input !== "" && input.length < 2) setIsOpen(true);
    else setQuestion(input);
  }, [input, setQuestion]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    setInput("");
  }, [tab]);

  return (
    <Fragment>
      <div className="flex items-center gap-2 max-w-md">
        <div className="relative flex-1">
          <Input
            value={input}
            onChange={handleChange}
            placeholder="찾으시는 내용을 입력해 주세요"
            className="pr-10 border-s"
            onKeyDown={handleEnter}
          />
          <div className="flex flex-row gap-3 absolute right-2 top-1/2 -translate-y-1/2">
            <button
              onClick={handleClear}
              className={`text-gray-500 hover:text-gray-800 hover:cursor-pointer ${
                !input.length ? "hidden" : ""
              }`}
            >
              <X size={16} />
            </button>

            <button onClick={handleSearch} className=" text-gray-800 hover:cursor-pointer">
              <Search className="w-4 h-4 mr-2" />
            </button>
          </div>
        </div>
      </div>
      <SearchWarningDialog isOpen={isOpen} handleClose={handleClose} />
    </Fragment>
  );
}
