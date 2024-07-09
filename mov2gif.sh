 


echo $1

out=transform_jp.gif
ss=0
t=16

#ffmpeg -i $1 -vf "fps=15,scale=600:-1:flags=lanczos" -c:v pam -f image2pipe - | convert -delay 10 - -layers optimize $out
#ffmpeg -i "$1" -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $out


ffmpeg -i "$1" -filter:v "crop=in_w-4:in_h-4:2:2" -c:a copy -y out.mov
ffmpeg -ss $ss -t $t -i out.mov -y -vf "fps=15,scale=600:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" $out

mv $out /Users/ask/techgym/assets/img/
