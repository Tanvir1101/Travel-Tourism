<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmpTransactionRequest extends FormRequest
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
           'receiver_id' => 'required',
           'receiver' => 'required',
           'username' => 'required',
           'description' => 'required',
           'amount' => 'required|integer'
        ];
    }
}
