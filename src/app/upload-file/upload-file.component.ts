import { Component, OnInit, Input, NgZone, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  
  @Input()
  filePath: string;

  private hasBaseDropZoneOver: boolean = false;
  private uploader: FileUploader;
  private title: string;
  private x: any;
  constructor(private cloudinary: Cloudinary,
    private zone: NgZone,
    private http: HttpClient) {
      this.filePath = '';
    this.title = '';
  }

  ngOnInit() {
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      this.x =  fileItem.file.type; // return file type
      // Add Cloudinary unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);

      // Add file to upload
      form.append('file', fileItem);

      // File Name and Location
      if(this.filePath.length != 0) {
        form.append('public_id', this.filePath);
      }
      

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

  }
  
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
    console.log('Called fileOverBase');
  }

}
