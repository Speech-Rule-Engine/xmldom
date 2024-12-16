import * as conventions from './conventions.mjs';
import * as errors from './errors.mjs';
import * as dom from './dom.mjs';
import * as domParser from './dom-parser.mjs';

export const assign = conventions.assign;
export const hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
export const isHTMLMimeType = conventions.isHTMLMimeType;
export const isValidMimeType = conventions.isValidMimeType;
export const MIME_TYPE = conventions.MIME_TYPE;
export const NAMESPACE = conventions.NAMESPACE;

export const DOMException = errors.DOMException;
export const DOMExceptionName = errors.DOMExceptionName;
export const ExceptionCode = errors.ExceptionCode;
export const ParseError = errors.ParseError;

export const Attr = dom.Attr;
export const CDATASection = dom.CDATASection;
export const CharacterData = dom.CharacterData;
export const Comment = dom.Comment;
export const Document = dom.Document;
export const DocumentFragment = dom.DocumentFragment;
export const DocumentType = dom.DocumentType;
export const DOMImplementation = dom.DOMImplementation;
export const Element = dom.Element;
export const Entity = dom.Entity;
export const EntityReference = dom.EntityReference;
export const LiveNodeList = dom.LiveNodeList;
export const NamedNodeMap = dom.NamedNodeMap;
export const Node = dom.Node;
export const NodeList = dom.NodeList;
export const Notation = dom.Notation;
export const ProcessingInstruction = dom.ProcessingInstruction;
export const Text = dom.Text;
export const XMLSerializer = dom.XMLSerializer;

export const DOMParser = domParser.DOMParser;
export const onErrorStopParsing = domParser.onErrorStopParsing;
export const onWarningStopParsing = domParser.onWarningStopParsing;
