/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { UploadAdapter } from "@ckeditor/ckeditor5-adapter-ckfinder";
import { Bold, Code, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from "@ckeditor/ckeditor5-font";
import { Heading, Title } from "@ckeditor/ckeditor5-heading";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { Link, LinkImage } from "@ckeditor/ckeditor5-link";
import { DocumentList, DocumentListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed, MediaEmbedToolbar } from "@ckeditor/ckeditor5-media-embed";
import { Mention } from "@ckeditor/ckeditor5-mention";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { ShowBlocks } from "@ckeditor/ckeditor5-show-blocks";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText } from "@ckeditor/ckeditor5-special-characters";
import { Style } from "@ckeditor/ckeditor5-style";
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from "@ckeditor/ckeditor5-table";
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof AutoImage | typeof Bold | typeof Code | typeof CodeBlock | typeof DocumentList | typeof DocumentListProperties | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof GeneralHtmlSupport | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof IndentBlock | typeof Italic | typeof Link | typeof LinkImage | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof PageBreak | typeof Paragraph | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersArrows | typeof SpecialCharactersCurrency | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersMathematical | typeof SpecialCharactersText | typeof Style | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof Title | typeof Underline | typeof UploadAdapter)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
    };
}
export default Editor;
