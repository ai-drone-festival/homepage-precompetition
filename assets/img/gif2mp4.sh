#!/bin/bash

ffmpeg -r 30 -i input.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" output_jap.mp4 
