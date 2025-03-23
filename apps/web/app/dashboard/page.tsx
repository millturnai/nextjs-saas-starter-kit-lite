import { PageBody, PageHeader } from '@kit/ui/page';
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from '@kit/ui/table';
import { Table } from 'lucide-react';

import { DashboardDemo } from '~/home/_components/dashboard-demo';
import { TestComponent } from './_components/test_table';

export default function HomePage() {
  return (
    <>
      <PageHeader description={'DashboardTest'} />

      <PageBody>
        <TestComponent />
        {/* <h1>Test</h1> */}
      </PageBody>
    </>
  );
}
