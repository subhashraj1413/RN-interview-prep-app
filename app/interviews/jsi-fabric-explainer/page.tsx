import { InterviewViewer } from "@/components/interview-viewer";

export default function JsiFabricExplainerPage() {
  return (
    <InterviewViewer
      eyebrow="Architecture Explainer"
      title="JSI, Codegen, TurboModules, and Fabric Explainer"
      description="A diagram-led walkthrough of React Native's old bridge, the role of JSI, how Codegen generates typed native contracts, how TurboModules stay lazy, and how Fabric fits into the new architecture."
      sourcePath="/raw/jsi-fabric-explainer"
    />
  );
}
