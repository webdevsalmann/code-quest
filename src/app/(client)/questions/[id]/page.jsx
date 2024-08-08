import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import QuestionPane from "./question-pane"
import CodeArea from "./code-area"
import Terminal from "./terminal"
import { questions } from "@/lib/datas/questions"

export default function Page({ params }) {
    const questionId = Number(params.id);

    return (
        <div className="p-base">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-full min-h-[calc(100vh_-_6rem)] max-h-[calc(100vh_-_6rem)] rounded-lg border"
            >
                <ResizablePanel defaultSize={30} minSize={20}>
                    <QuestionPane questionId={questionId} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50} minSize={20}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25} minSize={20}>
                            <CodeArea />
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={10} minSize={10}>
                            <Terminal />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}
