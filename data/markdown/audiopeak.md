# Notes!

## AudioPeak Project Launch Doc

### ft. Jad & Sophie & more!

Here, we'll keep track of all of our **progress** and *notes*.

> Our plan is to find a way to scrub LL video files for audio peaks, and turn those moments into GIFs, through a command line function. Those GIFs could then automatically be uploaded to an Express App for everyone to enjoy!

Steps:
- [ ] Research relevant command line plug-ins.
- [ ] Create the function!
- [ ] Create an Express app to upload resulting GIFs on.
- [ ] And, take notes the whole time!

---

Helpful command line links: 
- [stack overflow](https://stackoverflow.com/questions/4420208/finding-audio-peaks-in-video-files)
- [ffmpeg commands for converting btwn audio/video/images](https://www.tecmint.com/ffmpeg-commands-for-video-audio-and-image-conversion-in-linux/)
- [Sound eXchange features ](http://sox.sourceforge.net/Docs/Features) 
- [creating custom command line functions](https://medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e)

`print("great job researching!")`

Important SOX functions:
- `$ sox old.wav new.wav trim [SECOND TO START] [SECONDS DURATION]`
	- extract parts of an audio file
- `$ sox foo.wav -e stat`
	- get info for an audio file (including amplitude)
- `$ ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac` 
	- extract audio from a video file


<img src="https://cdn.shopify.com/s/files/1/0080/8372/products/tattly_yay_burst_mike_lowery_00_1024x1024@2x.png?v=1566225019"  alt="yay"  style="width:250px;height:200px;">

**Contributors**
1. Jad
2. Sophie
3. ~~jad's imaginary friend~~

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE5Njk3Mjg2OSw2NzM5MTAyMjQsOTE2OD
IyMTksNDc4MDE1OTIxLC0xOTU5NjU4MzUyLDI2NDAxNjgyOCwt
MTU4OTg0ODExNywyMjA0NTUxNTIsLTI2NTAxNTI4MCwtMjA2Mj
AwODc0Ml19
-->