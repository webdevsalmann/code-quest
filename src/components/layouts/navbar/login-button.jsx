import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginButton() {
    return (
        <Dialog>
            <DialogTrigger>
                <Button>Sign In</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                        <div className="space-y-base">
                            <div className="space-y-xs">
                                <Label>Email</Label>
                                <Input />
                            </div>
                            <div className="space-y-xs">
                                <Label>Password</Label>
                                <Input />
                            </div>
                            <div className="space-y-xs">
                                <Label>Confirm Password</Label>
                                <Input />
                            </div>
                            <div className="flex-center">
                                <Button>Sign In</Button>
                            </div>
                        </div>
                        <hr className="mt-base" />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
