import { source } from '@/app/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { DocsLayout } from 'fumadocs-ui/layout';
import {
  CircleEllipsis,
  LucideIcon,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';

interface Mode {
  param: string;
  name: string;
  package: string;
  description: string;
  icon: LucideIcon;
}

const modes: Mode[] = [
  {
    param: 'client',
    name: 'Client',
    package: 'client',
    description: 'The client',
    icon: MonitorSmartphone,
  },
  {
    param: 'server',
    name: 'Server',
    package: 'server',
    description: 'The server',
    icon: ServerCog,
  },
  {
    param: 'others',
    name: 'Others',
    package: 'others',
    description: 'Others',
    icon: CircleEllipsis,
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        banner: (
          <RootToggle
            options={modes.map((mode) => {
              return {
                url: `/docs/${mode.param}`,
                icon: <mode.icon className='size-10 p-1.5' />,
                title: mode.name,
                description: mode.description,
              };
            })}
          />
        ),
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
