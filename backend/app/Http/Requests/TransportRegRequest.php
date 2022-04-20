<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TransportRegRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'required',
            'name' => 'required|min:2|max:20',
            'email' => 'required|email:rfc,dns,filter|max:30|unique:App\Employee,email|unique:App\Admin,email',
            'phone' => 'required|min:11|max:15',
            'password' => 'required|min:4|max:20',
            'rpassword' => 'required|min:4|max:20',
            'rpassword' => 'required_with:rpassword|same:rpassword|min:4'
        ];
    }
}
