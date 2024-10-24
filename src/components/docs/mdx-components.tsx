import { Alert } from '@ui/Alert';
import Link from 'fumadocs-core/link';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { FileCode2Icon } from 'lucide-react';
import { MDXComponents } from 'mdx/types';
import CustomTable from '../blocks/CustomTable';
import Tag from '../ui/Tag';
import InfoBlock from './InfoBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // const { AutoTypeTable  } = createTypeTable();

  return {
    ...defaultMdxComponents,
    ...components,
    InfoBlock,
    Alert,
    Step,
    Steps,
    Tag,
    TypeTable,
    Table: CustomTable,
    Link: (props) => <Link {...props} external />,
    CodeBlock: (props) => (
      <CodeBlock {...props} lang='tsx' icon={<FileCode2Icon />} />
    ),
    Pre,
    Img: (props) => (
      <ImageZoom
        {...(props as any)}
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
    ),
  };
}
