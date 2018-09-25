import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

    public groups: any;
    public firstForm: FormGroup;
    public validText = true;
    public validDropdown = true;
    public error_text = false;
    public error_group = false;
    public message: string;
    public show = false;

    constructor(
            private formBuilder: FormBuilder,
            private postService: PostService,
    ) {
    }

    ngOnInit() {
        this.firstForm = this.formBuilder.group({
            text: ['', [Validators.required]],
            dropdown: ['', [Validators.required]]
        });

        this.postService.getGroups()
            .subscribe(
                data => {
                    this.groups = data['groups'];
                }
            );
    }

    submit(): void {
        this.validText = this.controls['text'].valid;
        this.validDropdown = this.controls['dropdown'].valid;
        this.error_text = (!this.validText);
        this.error_group = (!this.validDropdown);

        if (this.firstForm.valid) {
            const form_data = {
                text: this.firstForm.value.text,
                group_id: this.firstForm.value.dropdown,
            };
            this.postService.createPost(form_data)
                .subscribe(
                    data => {
                        this.show = true;
                        this.message = data['message'];
                    },
                    error => {
                        this.show = true;
                        this.message = error.error.message;
                    }
                );
        }
    }

    get controls() {
        return this.firstForm.controls;
    }

}
