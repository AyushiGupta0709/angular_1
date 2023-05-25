import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
 
 data="";
 value='true';
  showData(type:string){
    
    if(this.value=='true'){
     this.data="Ayushi";
     this.value='false';
    }else{

      this.data="";
      this.value='true';
    }

  }

  content="";
  countWords=1;
  addInput(content:string){
    let para=document.getElementById('para');
   
   
    // this.content=content;
   
    if(this.countWords%5==0){
      let span=document.createElement('span');
      span.innerHTML=" "+content;
      span.style.color="blue";
      para?.appendChild(span);
      this.countWords++;
    }else{
    
      let span=document.createElement('span');
      span.innerHTML=" "+content;
      para?.appendChild(span);
      this.countWords++;

    }


  }


}
