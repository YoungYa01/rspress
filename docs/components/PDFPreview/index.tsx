/**
 * @description: Pdf 文件预览
 * @author: YoungYa
 */
import jsPreviewPdf, { JsPdfPreview } from '@js-preview/pdf';
import { Spin } from 'antd'
import React, {FC, useEffect, useRef, useState} from 'react';

const PdfPreview: FC = ({ filePath = '/office/test.pdf'}: { filePath?: string }) => {
  const pdfContainerRef = useRef<HTMLDivElement | null>(null);
  const pdfPreviewerRef = useRef<JsPdfPreview | null>(null) // 保存 myPdfPreviewer 的引用
  const [isLoading, setIsLoading] = useState<boolean>(true); // 是否加载中

  // 挂载回调
  useEffect(() => {
    const containerElement = pdfContainerRef.current;
    if (containerElement && !pdfPreviewerRef.current) {
      // 初始化 myPdfPreviewer，并保存引用
      const myPdfPreviewer = jsPreviewPdf.init(containerElement, {
        onError: () => {
          setIsLoading(false)
        },
        onRendered: () => {
          setIsLoading(false)
        },
      })
      pdfPreviewerRef.current = myPdfPreviewer

      myPdfPreviewer.preview(filePath)
    }
  }, []);
  return (
    <Spin spinning={isLoading}>
      <div ref={pdfContainerRef} style={{ height: 'calc(100vh - 300px)' }} />
    </Spin>
  )
}
export default PdfPreview;
