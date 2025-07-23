import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PDFUpload } from "@/components/PDFUpload";
import { PDFPreview } from "@/components/PDFPreview";
import type { Document } from "@shared/schema";

export const MacbookAirSection = (): JSX.Element => {
  const [uploadedDocument, setUploadedDocument] = useState<Document | null>(null);
  const [showUpload, setShowUpload] = useState(true);

  const handleUploadComplete = (document: Document) => {
    setUploadedDocument(document);
    setShowUpload(false);
  };

  const handleUploadClick = () => {
    setShowUpload(true);
    setUploadedDocument(null);
  };

  // Card data for the contextual insights section
  const insightCards = [
    {
      title: "What is AI?",
      content:
        'This is the header of the page showing the current section the user is viewing in detail. It uses the actual heading text ("What is AI?") from the extracted document outline.',
    },
    {
      title: "Section Overview",
      content:
        "A brief breakdown of sub-points or a paraphrased summary of the section's content.\nUseful for:\nQuickly scanning what this section talks about.\nHelping users decide if this is relevant to their task.",
    },
    {
      title: "AI Insights",
      content:
        "AI-powered or semantic insights generated from this section. These could be:\nKeywords or entities mentioned often.\nExtractive or abstractive summary.\nCritical points for research or revision.",
    },
    {
      title: "Navigation Options",
      content:
        "Allows users to:\nJump directly to the page inside the PDF where this section appears.\nGo back to the full outline/sidebar to explore other sections.\nThis gives fast, fluid control over long or technical documents.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="relative w-full min-h-screen [background:radial-gradient(50%_50%_at_50%_8%,rgba(48,16,15,1)_49%,rgba(0,0,0,1)_53%)]">
        {/* Header navigation - moved higher up */}
        <div className="absolute top-6 right-8 z-10">
          <div className="flex items-center gap-4">
            <Button variant="link" className="text-[#e6ecffb2] text-base">
              Know More
            </Button>
            <Button 
              onClick={handleUploadClick}
              className="bg-[#531f17] text-white hover:bg-[#3f1711] rounded-[10px] shadow-[0px_0px_0px_1px_#0055ff1f]"
            >
              Upload
            </Button>
          </div>
        </div>

        {/* Logo - moved higher up */}
        <div className="absolute top-8 left-8 z-10">
          <img
            className="w-[138px] h-[79px] object-cover"
            alt="Adobe Logo"
            src="/figmaAssets/image-removebg-preview-1.png"
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center min-h-screen px-4">

          {/* Main content */}
          <div className="relative w-full max-w-7xl text-center">
            {/* Title section */}
            <div className="flex flex-col items-center mb-12">
              <h1 className="[font-family:'MuseoModerno',Helvetica] text-[84px] leading-[70.4px] font-semibold mb-6">
                <span className="text-white">PDF </span>
                <span className="text-[#ca6a34]">Document</span>
                <br />
                <span className="text-white">Analyzer</span>
              </h1>

              <div className="space-y-1 mb-8">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[21px]">
                  Extract document structure using advanced AI/ML models
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-[21px]">
                  Lightweight. CPU-Optimized Offline Processing
                </p>
              </div>
            </div>

            {/* PDF Upload/Preview Section */}
            <div className="relative w-full max-w-4xl mx-auto">
              {showUpload || !uploadedDocument ? (
                <PDFUpload onUploadComplete={handleUploadComplete} />
              ) : (
                <PDFPreview document={uploadedDocument} />
              )}

              {showUpload && (
                <img
                  className="absolute right-[-50px] top-[130px] w-[113px] h-[490px] z-0"
                  alt="Smiley over the loading bar"
                  src="/figmaAssets/smiley-over-the-loading-bar.png"
                />
              )}
            </div>

            {/* Benefits badge */}
            <div className="flex justify-center mt-8">
              <Badge className="bg-black backdrop-blur-[34px] rounded-[26px] px-4 py-2">
                <span className="bg-[linear-gradient(128deg,rgba(144,79,45,1)_22%,rgba(171,122,90,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent [font-family:'Inter',Helvetica] text-base">
                  BENEFITS
                </span>
              </Badge>
            </div>

            {/* Contextual Insights section */}
            <div className="mt-16">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[44px] text-center tracking-[-0.44px] leading-[52.8px] mb-12">
                Contextual Insights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {insightCards.map((card, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl overflow-hidden [background:radial-gradient(50%_50%_at_50%_8%,rgba(59,21,18,1)_0%,rgba(0,0,0,1)_100%)] border-0 relative"
                  >
                    <CardContent className="p-8">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-7 mb-6">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#e6ecffb2] text-base tracking-[-0.32px] leading-[25.6px] whitespace-pre-line">
                        {card.content}
                      </p>
                    </CardContent>
                    <div className="absolute w-full h-[127px] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] opacity-[0.63]" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background vector */}
        <img
          className="absolute w-full h-auto top-0 left-0 z-0"
          alt="Vector"
          src="/figmaAssets/vector.svg"
        />
      </div>
    </section>
  );
};
