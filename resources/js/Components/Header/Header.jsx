"use client"

import * as React from "react"
import Container from "../ui/container";
import { Link } from '@inertiajs/react';
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, 
    SheetFooter, SheetDescription, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
import ProfileButton from "../ui/ProfileButton";

const asset = (path) => `/storage/images/${path}`;

export default function Header() {

    const routes = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/",
            label: "Shop",
        },
        {
            href: "/",
            label: "Features",
        },
        {
            href: "/",
            label: "Blog",
        },
    ];

    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 md:hidden w-6" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route, i) => (
                                        <Link
                                            key={i}
                                            href={route.href}
                                            className="block px-2 py-1 text-lg"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold">STORE NAME</h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route, i) => (
                            <Button asChild variant="ghost" key={i}>
                                <Link
                                    href={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2"
                                    aria-label="Shopping Cart"
                                >
                                    <ShoppingCart className="h-6 w-6" />
                                    <span className="sr-only">Shopping Cart</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input id="username" value="@peduarte" className="col-span-3" />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            className="mr-6"
                        >
                            <Heart className="h-6 w-6" />
                            <span className="sr-only">Heart</span>
                        </Button>
                        <ProfileButton />
                    </div>
                </div>
            </Container>
        </header>
    )
}