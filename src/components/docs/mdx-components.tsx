import { Alert } from '@ui/alert';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { MDXComponents } from 'mdx/types';
import InfoBlock from './InfoBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    InfoBlock,
    Alert,
    Step,
    Steps,
    TypeTable,
  };
}
