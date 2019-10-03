import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../common/card';
import { workProps } from '../constants/work-props';

export default function Work() {
  const { work1, work2, work3, work4 } = workProps;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <CustomCard
            avatar={work1.avatar}
            titleText={work1.titleText}
            subHeaderText={work1.subHeaderText}
            mainContent={work1.mainContent}
            subContent={work1.subContent}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <CustomCard
            avatar={work2.avatar}
            titleText={work2.titleText}
            subHeaderText={work2.subHeaderText}
            mainContent={work2.mainContent}
            subContent={work2.subContent}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <CustomCard
            avatar={work3.avatar}
            titleText={work3.titleText}
            subHeaderText={work3.subHeaderText}
            mainContent={work3.mainContent}
            subContent={work3.subContent}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <CustomCard
            avatar={work4.avatar}
            titleText={work4.titleText}
            subHeaderText={work4.subHeaderText}
            mainContent={work4.mainContent}
            subContent={work4.subContent}
          />
        </Grid>
      </Grid>
    </div>
  );
}
