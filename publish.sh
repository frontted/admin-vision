s3cmd del s3://demo.frontted.com/vision/220320181941/* &&
s3cmd del s3://demo.frontted.com/vision/220320181941/**/**/* &&
s3cmd sync -MP dist/ s3://demo.frontted.com/vision/220320181941/ &&
s3cmd put -P --mime-type=text/css dist/assets/css/*.css s3://demo.frontted.com/vision/220320181941/assets/css/ &&
s3cmd put -P --mime-type=text/css dist/assets/vendor/*.css s3://demo.frontted.com/vision/220320181941/assets/vendor/