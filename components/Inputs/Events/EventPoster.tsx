"use client";

import ImageUpload from "@/components/Upload/ImageUpload";
import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ComponentProps = {
  onNext: (val: any) => Promise<void>;
  onBack: () => void;
};

const EventPoster = ({ onBack, onNext }: ComponentProps) => {
  const [imageURL, setImageURL] = useState<string | undefined>();
  const onImageURL = (url: string) => {
    setImageURL(url);
  };

  return (
    <div>
      <ImageUpload onImageURL={onImageURL} />

      {/* Footer */}
      <DialogFooter className="mt-8">
        <div className="flex justify-end items-center gap-4">
          <Button type="button" variant="secondary" onClick={onBack}>
            Back
          </Button>

          <Button
            onClick={() => {
              if (imageURL) {
                onNext({ poster_url: imageURL });
              } else {
                return;
              }
            }}
          >
            Next
          </Button>
        </div>
      </DialogFooter>
    </div>
  );
};

export default EventPoster;
