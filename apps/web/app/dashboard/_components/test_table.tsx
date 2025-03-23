'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@kit/ui/card";
import { FeatureGrid, FeatureCard, FeatureShowcase, FeatureShowcaseIconContainer, FeatureCardWith } from "@kit/ui/marketing";
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@kit/ui/table";
import { LayoutDashboard, Table } from "lucide-react";
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function Figure(props: React.PropsWithChildren) {
  return (
    <div className={'font-heading text-2xl font-semibold'}>
      {props.children}
    </div>
  );
}

interface VideoFeedItemProps {
  machineName: string;
  description: string;
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));


interface VideoFeedPopupProps {
  video: VideoFeedItemProps;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function VideoFeedPopup(props: VideoFeedPopupProps) {
  return <Dialog open={props.open}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{props.video.machineName}</DialogTitle>
        <DialogDescription>
          <Image
            decoding={'async'}
            loading={'lazy'}
            src={'/images/oauth/facebook.webp'}
            alt={`image logo`}
            width={600}
            height={600}
          />
        </DialogDescription>
        <Button onClick={() => {
          props.setOpen(false);
        }}>Close</Button>
      </DialogHeader>
    </DialogContent>
  </Dialog>
}
function VideoFeedItem(props: VideoFeedItemProps) {
  const [open, setOpen] = useState(false);
  const { machineName, description } = props;
  return (<div>
    <VideoFeedPopup open={open} video={{...props}} setOpen={setOpen}/>
    <Card onClick={() => {
      
  }}>
    <CardHeader>
      <CardTitle className={'flex items-center gap-2.5'}>
        <span>{machineName}</span>
      </CardTitle>

      <CardDescription>
        <span>{description}</span>
      </CardDescription>
    </CardHeader>

    <CardContent onClick={() => {
      setOpen(true);
    }} className={'space-y-4'}>
      <Image
        decoding={'async'}
        loading={'lazy'}
        src={'/images/oauth/facebook.webp'}
        alt={`image logo`}
        width={200}
        height={200}
      />
    </CardContent>
  </Card></div>)
}
export function TestComponent() {
  const [showText, setShowText] = useState<boolean>(false);
  const videoFeeds: VideoFeedItemProps[] = [
    {
      machineName: "CNC X",
      description: "Some Machine",
    },
    {
      machineName: "CNC Y",
      description: "Some Machin 421e"
    },
    {
      machineName: "CNC D",
      description: "Some Machine 412"
    },
    {
      machineName: "CNC XFS",
      description: "Some Machine 2131293489"
    }
  ]
  return <>
    <div
      className={
        'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
      }
    >
      {videoFeeds.map((v) => {
        return <VideoFeedItem key={v.machineName} machineName={v.machineName} description={v.description} />
      })}
      <div>
        <Button>Click me</Button>
      </div>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              setShowText(true);
            }}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {showText && <h1>MINH THE G!</h1>}

    </div>
  </>
}