import {
  ad1,
  ad2,
  ad4,
  ad3,
  choose,
  l_but,
  r_but,
  im1,
  im2,
  im3,
  control,
  head1,
  head2,
  head3,
  text1,
  text2,
  text3,
  Sim1,
  Sim2,
  Sim3,
  mobAds,
  Sad1,
  Sad2,
  Sad3,
  Sad4,
  close,
  burg
} from "./vars.js";
import {
  show,hide,write,erase,type
} from './funcs.js'

// -----------------------------------------------------------------------
ad1.onclick = () => {
  choose.style.cssText = 'width: 29px;height:2px;top:82px;left:221px;'
}
ad2.onclick = () => {
  choose.style.cssText = "width: 31px;height:2px;top:82px;left:315px;";
};
ad3.onclick = () => {
  choose.style.cssText = "width: 37px;height:2px;top:82px;left:401.5px;";
};
ad4.onclick = () => {
  choose.style.cssText = "width: 46px;height:2px;top:82px;left:499px;";
};
r_but.onclick = () => {

  if (control.classList.value == 'control1') {
    control.classList.value = 'control2';
    show(im2);
    show(Sim2)
    hide(im1);
    hide(Sim1)
    hide(im3);
    hide(Sim3);
    write(head2)
    erase(head1)
    erase(head3);
    type(text2);
    erase(text1);
    erase(text3);
  }
  else if (control.classList.value == 'control2') {
    control.classList.value = "control3";
    show(im3);
    show(Sim3);
    hide(im1);
    hide(Sim1);
    hide(im2);
    hide(Sim2);
    write(head3)
    erase(head2);
    erase(head1);
    type(text3);
    erase(text1);
    erase(text2);
  }
  else {
    control.classList.value = 'control1';
    show(im1);
    show(Sim1);
    hide(im2);
    hide(Sim2);
    hide(im3);
    hide(Sim3);
    write(head1);
    erase(head2);
    erase(head3);
    type(text1);
    erase(text2);
    erase(text3);
  }
}
l_but.onclick = () => {
    if (control.classList.value == "control1") {
      control.classList.value = "control3";
      show(im3);
      show(Sim3);
      hide(im1);
      hide(Sim1);
      hide(im2);
      hide(Sim2);
    write(head3);
    erase(head1);
    erase(head2);
    type(text3);
    erase(text1);
    erase(text2);
    } else if (control.classList.value == "control2") {
      control.classList.value = "control1";
      show(im1);
      show(Sim1);
      hide(im3);
      hide(Sim3);
      hide(im2);
      hide(Sim2);
    write(head1);
    erase(head3);
    erase(head2);
    type(text1);
    erase(text3);
    erase(text2);
    } else {
      control.classList.value = "control2";
      show(im2);
      show(Sim2);
      hide(im1);
      hide(Sim1);
      hide(im3);
      hide(Sim3);
    write(head2);
    erase(head1);
    erase(head3);
    type(text2);
    erase(text1);
    erase(text3);
  }
};
burg.onclick = () => {
  mobAds.style.height = '100px';
  close.style.cssText = 'transform:rotate(0);opacity:100%;filter:blur(0);transition-duration:.4s;'
  write(Sad1)
  write(Sad2)
  write(Sad3)
  write(Sad4);
}
close.onclick = () => {
  mobAds.style.height = '0';
  close.style.cssText = 'transform:rotate(90deg);opacity:0%;filter:blur(5px);transition-duration:.4s;'
  erase(Sad1)
  erase(Sad2)
  erase(Sad3)
  erase(Sad4);
}