s3cmd del s3://demo.frontted.com/vision/200320181418/* &&
s3cmd del s3://demo.frontted.com/vision/200320181418/**/**/* &&
s3cmd sync -MP dist/ s3://demo.frontted.com/vision/200320181418/ &&
s3cmd put -P --mime-type=text/css dist/assets/css/*.css s3://demo.frontted.com/vision/200320181418/assets/css/ &&
s3cmd put -P --mime-type=text/css dist/assets/vendor/*.css s3://demo.frontted.com/vision/200320181418/assets/vendor/